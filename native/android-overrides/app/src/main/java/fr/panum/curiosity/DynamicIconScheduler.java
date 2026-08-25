package fr.panum.curiosity;

import android.content.Context;

import androidx.work.ExistingPeriodicWorkPolicy;
import androidx.work.PeriodicWorkRequest;
import androidx.work.WorkManager;

import java.time.Duration;
import java.time.ZonedDateTime;
import java.util.concurrent.TimeUnit;

final class DynamicIconScheduler {
    private static final String UNIQUE_WORK = "curiosity-dynamic-icon-hourly";

    private DynamicIconScheduler() {}

    static void ensureScheduled(Context context) {
        PeriodicWorkRequest request = new PeriodicWorkRequest.Builder(
            DynamicIconWorker.class,
            1,
            TimeUnit.HOURS
        )
            .setInitialDelay(millisUntilNextHour(), TimeUnit.MILLISECONDS)
            .build();

        WorkManager.getInstance(context.getApplicationContext()).enqueueUniquePeriodicWork(
            UNIQUE_WORK,
            ExistingPeriodicWorkPolicy.UPDATE,
            request
        );
    }

    static long millisUntilNextHour() {
        ZonedDateTime now = ZonedDateTime.now();
        ZonedDateTime next = now.plusHours(1).withMinute(0).withSecond(0).withNano(0);
        return Math.max(Duration.between(now, next).toMillis(), 1000L);
    }
}
