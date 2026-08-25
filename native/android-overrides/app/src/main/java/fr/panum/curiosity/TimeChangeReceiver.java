package fr.panum.curiosity;

import android.content.BroadcastReceiver;
import android.content.Context;
import android.content.Intent;

public final class TimeChangeReceiver extends BroadcastReceiver {
    @Override
    public void onReceive(Context context, Intent intent) {
        DynamicIconManager.sync(context);
        DynamicIconScheduler.ensureScheduled(context);
    }
}
