## Devlog Entry - 12/14

[Back To README](../README.md)

### How we satisfied the software requirements

**[F0.a] You control a character moving on a 2D grid.**\
Same as last week.

**[F0.b] You advance time in the turn-based simulation manually.**\
Same as last week.

**[F0.c] You can reap (gather) or sow (plant) plants on the grid when your character is near them.**\
Same as last week.

**[F0.d] Grid cells have sun and water levels. The incoming sun and water for each cell is somehow randomly generated each turn. Sun energy cannot be stored in a cell (it is used immediately or lost) while water moisture can be slowly accumulated over several turns.**\
Same as last week.

**[F0.e] Each plant on the grid has a type (e.g. one of 3 species) and a growth level (e.g. “level 1”, “level 2”, “level 3”).**\
Same as last week.

**[F0.f] Simple spatial rules govern plant growth based on sun, water, and nearby plants (growth is unlocked by satisfying conditions).**\
Same as last week.

**[F0.g] A play scenario is completed when some condition is satisfied (e.g. at least X plants at growth level Y or above).**\
Same as last week.

**[F1.a] The important state of each cell of your game’s grid must be backed by a single contiguous byte array in AoS or SoA format. Your team must statically allocate memory usage for the whole grid.**\
Same as last week.

**[F1.b] The player must be able to undo every major choice (all the way back to the start of play), even from a saved game. They should be able to redo (undo of undo operations) multiple times.**\
Same as last week.

**[F1.c] The player must be able to manually save their progress in the game in a way that allows them to load that save and continue play another day. The player must be able to manage multiple save files (allowing save scumming).**\
Same as last week.

**[F1.d] The game must implement an implicit auto-save system to support recovery from unexpected quits. (For example, when the game is launched, if an auto-save entry is present, the game might ask the player "do you want to continue where you left off?" The auto-save entry might or might not be visible among the list of manual save entries available for the player to load as part of F1.c.)**\
Same as last week.

**[F2.a] External DSL for scenario designs.**\
Same as last week.

**[F2.b] Internal DSL for plant types and growth conditions.**\
Same as last week.

**[F3.a] The game must be internationalized in way that allows all text visible to the player to be translated into different written languages.**\
All text in the game can be translated between English, Mandarin, and Hebrew.

**[F3.b] The game must be localized to support three different written languages.**\
Our game has language options for English, Mandarin (logographic), and Hebrew (right-to-left). This will change in-game text, as well button images.

**[F3.c] The game must be installable on a smartphone-class mobile device in the sense that there is a way to get it to show up as a home-screen icon that feels similar to other installed apps.**\
We did not accomplish this.

**[F3.d] Once installed in a mobile device, the game can be launched and satisfactorily played even when the device is not connected to the internet.**\
We did not accomplish this.

### Reflection
We weren’t able to figure out how to make our game installable on a mobile device. During presentations, other groups mentioned that it took them a few hours to set up. We probably missed some good resources that would lead us in the right direction, but Vite does seem to make things more complicated.\
To make our game fully translated to our language options, Brayden had to redraw button sprites in different languages. This extra bit of labor required could have been avoided by using engine-rendered text. Doing so would make it harder to create a stylized font though, so there are trade-offs to either approach.
