---
title: "The New York City Marathon, visualized"
description: "Mile splits from 58,721 finishers of the 2025 New York City Marathon show how the race unfolded, from the Verrazzano-Narrows Bridge to Central Park."
date: "2026-10-08"
image: "/writing/nyc-marathon/og.jpg"
readTime: "7 min read"
standalone: true
# A data story with its own route (app/writing/nyc-marathon/). This file lists it in Writing, the
# feed and the sitemap, and the page checks the read time above against its words. The body below
# is a plain-text copy of the page (the map's cards for a runner who finished in about 4:30), for
# anything that wants the article's text; it doesn't update itself when page.tsx changes.
---

The New York City Marathon is right around the corner. The race is held annually on the first Sunday in November, which falls on November 1st in 2026. This year, I’ll be running it for the first time.

One unique thing about the NYC Marathon is that it’s one of few big marathons that makes its detailed results available to download. Last year 59,122 people finished the race, the most in the race’s history.

Timing mats record every runner’s splits from mile 3 to the finish, and the NYRR publishes the results. So, naturally I had to pull the data of the 58,721 finishers with complete records to visualize the race mile by mile.

Each dot is a finisher, green when running faster than their average pace and red when slower.

Let’s follow a typical runner who finished in 4:30.

The race starts on the Verrazzano-Narrows Bridge, the highest point of the course, and runners who finished near 4:30 ran the first three miles 6 percent faster than their average.

Through the flat miles of Brooklyn, they kept running 3 to 7 percent faster than their average.

They reached halfway, on the Pulaski Bridge, in 2:07:45, and the second half took them about 14 minutes longer.

On the Queensboro Bridge, miles 15 and 16, they ran slower than their average for the first time, and those two miles cost them about 48 seconds compared with miles 13 and 14.

On First Avenue they ran close to their average pace until mile 19, in East Harlem.

Mile 20, over the Willis Avenue Bridge into the Bronx, was 10 percent slower than their average, and miles 21 to 23 stayed about that slow.

The climb up Fifth Avenue in mile 24 was their slowest mile, 13 percent slower than their average.

They ran the rolling last two miles through Central Park, and the typical runner in the group finished in 4:29:47.

Now, let’s take a look at the fastest and slowest runners. The women’s winner was the first runner to finish, at 10:54 a.m., when 26,617 runners had not yet started.

Both winners ran the second half faster than the first. The women’s winner ran halves of 1:11:01 and 1:08:50, and the men’s winner 1:05:19 and 1:02:50, finishing 18 minutes after her.

When the women’s winner finished, the last finisher was at mile 4.3, in Bay Ridge, Brooklyn, and would be on the course for another 11 hours and 7 minutes.

By 6 p.m., 2,442 runners were left, spread over the last 8.5 miles of the course.

The last of the 59,122 finishers crossed the line at 10:01 p.m., 12 hours and 45 minutes after starting. They ran the first half in about 6 hours and 14 minutes and the second in about 6 hours and 31 minutes.

## How hard is New York?

New York has a reputation for being a tough race. While bulk data from other major marathons isn’t easily downloadable, Chicago’s 2025 results are available. Chicago has a reputation for being one of the fastest and flattest major marathons. Compared to Chicago, New York certainly looks harder. The typical New York finisher took 4 hours and 24 minutes last year, 11 minutes longer than the typical finisher in Chicago three weeks earlier. Some of that gap is who runs each race, but [a 2026 analysis](https://doi.org/10.51224/SportRxiv.942) that compared the same runners across 1.2 million marathon finishes found New York’s 2025 race about 4 minutes slower than Chicago’s for a three-hour marathoner.

New York runners also slowed more in the second half. Among men, only 7 percent ran a faster second half, compared with 10 percent in Chicago. Among women, 9 percent, compared with 12 percent in Chicago.

In New York, runners ran the first 13 miles 2 to 8 percent faster than their average pace, stayed within about 2 percent of it through mile 19, and ran every mile from 20 to 26 slower, by 4 to 11 percent.

*Chart: Every group ran the second half slower, but faster runners slowed less.*

## Is it the hills?

Partly, though not because runners slow down much on the climbs. The famous hills aren’t the slowest miles. Runners ran the Verrazzano-Narrows Bridge, the biggest climb on the course at about 140 feet, only about 1 percent slower than the flat miles after it, and the Queensboro Bridge about 3 percent slower than the two miles before it. The exception is Fifth Avenue. Mile 24 climbs about 90 feet alongside Central Park, and it was the slowest mile of the race, about 4 percent slower than the two miles before it.

The hills probably matter more through accumulated fatigue. Even though miles 21 to 23, from the Bronx through Harlem, are flat, runners ran them about 7 percent slower than their average. It probably doesn’t help that most runners wake up before sunrise to catch a ferry or bus to the start on Staten Island and wait hours before they start running, with the first runners starting around 9 a.m. and the last runners not starting until 11:41 a.m.

*Chart: Runners slowed late in the race, not just on the hills. Pace is the typical runner’s in each split mile, compared with their own average for the race. Shading marks the climbs. Elevation is stretched vertically.*

I’ll try to update this story with the 2026 results after this year’s race. Good luck to everyone running.

## About the data

Results and splits are from New York Road Runners’ public results for the 2025 TCS New York City Marathon. The official count is 59,122 finishers; the results list has 59,121 of them, and the race clock counts from that list until the last runner finishes. The pace figures use the 58,721 finishers with complete split records, counting a record as complete when no more than four of its 25 timing-mat times are missing.

Each mile is compared with the runner’s own average pace for the race. There are no timing mats at miles 1 and 2, so the first segment runs from the start to mile 3. The cards describe all finishers within five minutes of the chosen time. The runner the camera follows is a composite of that group, not one finisher: in each split mile it moves at the group’s median pace relative to each runner’s own average, scaled so that it finishes in the group’s median time.

Each dot starts at its wave’s scheduled time plus the gap between the runner’s gun and net times, and moves at an even pace between timing mats. A dot is yellow at the runner’s average pace and shades to green as they run faster, fully green at 8 percent faster, and through orange to red as they slow, fully red at 10 percent slower. The 400 runners with incomplete splits, most of them among the last to finish, are placed by even pace between the times that were recorded; the last finisher has no times after mile 14.

The Chicago figures are from the race’s official 2025 results, as compiled in the [Chicago Marathon Results 2000–2025](https://www.kaggle.com/datasets/ramostherunning/chicago-marathon-2000-2025) dataset by Victor Ramos, available under the [Open Database License](https://opendatacommons.org/licenses/odbl/1-0/). Finish times are net times for every finisher in each race’s results, and a runner’s second half is their net finish time minus their half-marathon time. The 2026 analysis of the same runners across races is a preprint by Yi Hua Chang that has not been peer reviewed; its estimates include each race’s weather.

Buildings within 300 meters of the route are from the city’s Building Footprints dataset on NYC Open Data, drawn at their roof heights. The route is based on the 2023 course published on Strava and WNYC Data News’ course and mile-marker file, calibrated to the official miles. Elevation is from the U.S. Geological Survey’s 3D Elevation Program, with bridge decks at their modeled height. Land and borough lines are from the U.S. Census Bureau.

The published data has no names, bib numbers, runner IDs or hometowns.
