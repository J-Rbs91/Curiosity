package fr.panum.curiosity;

import android.content.Context;

import androidx.annotation.NonNull;
import androidx.work.Worker;
import androidx.work.WorkerParameters;

public final class DynamicIconWorker extends Worker {
    public DynamicIconWorker(@NonNull Context appContext, @NonNull WorkerParameters workerParams) {
        super(appContext, workerParams);
    }

    @NonNull
    @Override
    public Result doWork() {
        DynamicIconManager.sync(getApplicationContext());
        return Result.success();
    }
}
