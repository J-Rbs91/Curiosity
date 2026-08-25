package fr.panum.curiosity;

import android.content.ComponentName;
import android.content.Context;
import android.content.pm.PackageManager;
import android.webkit.CookieManager;

import java.time.LocalDate;
import java.time.LocalTime;
import java.util.Locale;

final class DynamicIconManager {
    static final String WEB_ORIGIN = "https://localhost";

    private DynamicIconManager() {}

    static void sync(Context context) {
        Context appContext = context.getApplicationContext();
        String cookies = null;
        try {
            cookies = CookieManager.getInstance().getCookie(WEB_ORIGIN);
        } catch (RuntimeException ignored) {
            // Le WebView peut ne pas encore être initialisé juste après un démarrage.
        }

        LocalDate today = LocalDate.now();
        LocalDate discoveredDay = DynamicIconState.discoveredDayFromCookies(cookies);
        int step = DynamicIconState.stepFor(today, LocalTime.now().getHour(), discoveredDay);
        applyStep(appContext, step);
    }

    static void applyStep(Context context, int requestedStep) {
        int targetStep = Math.max(0, Math.min(requestedStep, DynamicIconState.MAX_STEP));
        PackageManager packageManager = context.getPackageManager();

        if (isOnlyTargetEnabled(context, packageManager, targetStep)) {
            return;
        }

        setEnabled(context, packageManager, targetStep, true);

        for (int step = 0; step <= DynamicIconState.MAX_STEP; step++) {
            if (step != targetStep) {
                setEnabled(context, packageManager, step, false);
            }
        }
    }

    private static boolean isOnlyTargetEnabled(Context context, PackageManager packageManager, int targetStep) {
        for (int step = 0; step <= DynamicIconState.MAX_STEP; step++) {
            boolean shouldBeEnabled = step == targetStep;
            if (isEnabled(context, packageManager, step) != shouldBeEnabled) {
                return false;
            }
        }
        return true;
    }

    private static boolean isEnabled(Context context, PackageManager packageManager, int step) {
        int state = packageManager.getComponentEnabledSetting(alias(context, step));
        if (state == PackageManager.COMPONENT_ENABLED_STATE_ENABLED) return true;
        if (state == PackageManager.COMPONENT_ENABLED_STATE_DISABLED ||
            state == PackageManager.COMPONENT_ENABLED_STATE_DISABLED_USER ||
            state == PackageManager.COMPONENT_ENABLED_STATE_DISABLED_UNTIL_USED) return false;
        return step == 0;
    }

    private static void setEnabled(Context context, PackageManager packageManager, int step, boolean enabled) {
        packageManager.setComponentEnabledSetting(
            alias(context, step),
            enabled ? PackageManager.COMPONENT_ENABLED_STATE_ENABLED : PackageManager.COMPONENT_ENABLED_STATE_DISABLED,
            PackageManager.DONT_KILL_APP
        );
    }

    private static ComponentName alias(Context context, int step) {
        String className = context.getPackageName() + ".Icon" + String.format(Locale.ROOT, "%02d", step);
        return new ComponentName(context.getPackageName(), className);
    }
}
