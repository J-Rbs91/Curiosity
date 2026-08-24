package fr.panum.curiosity;

import static org.junit.Assert.assertEquals;
import static org.junit.Assert.assertNull;

import java.time.LocalDate;

import org.junit.Test;

public class DynamicIconStateTest {
    private static final LocalDate TODAY = LocalDate.of(2026, 8, 25);

    @Test
    public void staysBlackBeforeEleven() {
        assertEquals(0, DynamicIconState.stepFor(TODAY, 10, null));
    }

    @Test
    public void startsAtStepOneAtEleven() {
        assertEquals(1, DynamicIconState.stepFor(TODAY, 11, null));
    }

    @Test
    public void reachesMaximumAtTwentyThree() {
        assertEquals(13, DynamicIconState.stepFor(TODAY, 23, null));
    }

    @Test
    public void discoveryKeepsTheIconBlackForTheWholeDay() {
        assertEquals(0, DynamicIconState.stepFor(TODAY, 23, TODAY));
    }

    @Test
    public void yesterdayDiscoveryDoesNotAffectToday() {
        assertEquals(7, DynamicIconState.stepFor(TODAY, 17, TODAY.minusDays(1)));
    }

    @Test
    public void readsDiscoveryDateFromCookieHeader() {
        assertEquals(
            TODAY,
            DynamicIconState.discoveredDayFromCookies(
                "other=x; curiosity_daily_discovered=2026-08-25; foo=bar"
            )
        );
    }

    @Test
    public void rejectsInvalidDiscoveryCookie() {
        assertNull(
            DynamicIconState.discoveredDayFromCookies(
                "curiosity_daily_discovered=not-a-date"
            )
        );
    }
}
