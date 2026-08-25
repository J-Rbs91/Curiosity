package fr.panum.curiosity;

import android.os.Bundle;
import android.webkit.CookieManager;

import com.getcapacitor.BridgeActivity;

public class MainActivity extends BridgeActivity {
    @Override
    protected void onCreate(Bundle savedInstanceState) {
        super.onCreate(savedInstanceState);
        DynamicIconScheduler.ensureScheduled(this);
        DynamicIconManager.sync(this);
    }

    @Override
    public void onResume() {
        super.onResume();
        DynamicIconManager.sync(this);
    }

    @Override
    public void onPause() {
        try {
            CookieManager.getInstance().flush();
        } catch (RuntimeException ignored) {
            // Le worker resynchronisera au prochain réveil.
        }
        DynamicIconManager.sync(this);
        super.onPause();
    }
}
