package fr.panum.curiosity;

import java.time.LocalDate;
import java.time.format.DateTimeParseException;

final class DynamicIconState {
    static final int FIRST_HOUR = 11;
    static final int LAST_HOUR = 23;
    static final int MAX_STEP = LAST_HOUR - FIRST_HOUR + 1;
    static final String DISCOVERY_COOKIE = "curiosity_daily_discovered";

    private DynamicIconState() {}

    static int stepFor(LocalDate today, int hour, LocalDate discoveredDay) {
        if (today != null && today.equals(discoveredDay)) {
            return 0;
        }
        if (hour < FIRST_HOUR) {
            return 0;
        }
        return Math.min(hour, LAST_HOUR) - FIRST_HOUR + 1;
    }

    static LocalDate discoveredDayFromCookies(String cookies) {
        if (cookies == null || cookies.trim().isEmpty()) {
            return null;
        }

        for (String pair : cookies.split(";")) {
            String trimmed = pair.trim();
            int separator = trimmed.indexOf('=');
            if (separator <= 0) {
                continue;
            }
            String name = trimmed.substring(0, separator).trim();
            if (!DISCOVERY_COOKIE.equals(name)) {
                continue;
            }
            String value = trimmed.substring(separator + 1).trim();
            try {
                return LocalDate.parse(value);
            } catch (DateTimeParseException ignored) {
                return null;
            }
        }
        return null;
    }
}
