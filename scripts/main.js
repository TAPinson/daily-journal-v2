import { EntryListComponent } from './JournalEntryList.js'
import'./CurrentEntry.js'
import {formWriter} from './EntryForm.js'
import {FilterBar} from  './filter/FilterBar.js'
//import {moodFilterWriter} from './MoodFilter.js'

EntryListComponent();
formWriter()
FilterBar()
//moodFilterWriter()