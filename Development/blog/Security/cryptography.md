

security v obscurity

- hiding letter in new york


cryptogrphy

- confidentiality - encryption
- authentication - to konw who sent me this emsge
- integrity - your recieve message - know it hasn't been tampered with
- nonrepudiation - the sender can't later on deny they sent it - to trust that a lettter from alice really came from alice

encryption
- plaintext > encryption > cyphertext > decrypt > original text

substitution cipher
- take an a and call it b, encryption
- replace each character in plaintext iwth corresponding character to getnerate the cipher text 
- rot13 - rotate items by 13 >> 

homophonic cipher
- map to multiple items // a == 5, 13, and 25

polygram cipher- map aba to rtq  // group of characters

transpoition ciphers - anagram // secure => rescue (scrambled letters) like rail cipher 

obscurity >> scramble the message ?

cryptanalysis - 


128bit AES session key - key 2x128 exp possible keys 

early cipher - no keys / only an algorithms 
modern - keys  

plaintext + key => encryption => ciphertext 

algorthims symettric: des, rc2, aes  

- ssl, encrypt passwords ....


==============

if i pick lst name i loose bubbles in first name
but number bbbbles stay up

last name - a 


clear an individual bubble >> loose alternative bubbles
enter same search more than twice - 
=========

 /** in-coming data to be shown on grid. */
  @property({ type: Array })
  itemArray: Item[] =[];

  /** checkbox items selected for retry */
  @property({ type: Array })
  selectedItems: Item[];


  SITES

  /** site options for dropdown */
  @property({ type: Array })
  _allowedSites: SiteObj[] =[];

  /** selection for site column */
  @property({ type: Array })
  selectedSites: SiteObj[] = [];

  STATUS

  /** list of status Options for status dropdown */
  @property({ type: Array })
  statusOptions: object[] = [];

  
  // render
  /** captures the root for the context menu for re-renders */
  @property({ type: Object })
  contextMenuRoot: Context;

  // filter / selection state

  /** current value for an anonymous text filter */
  @property({ type: String })
  currentTextValue: string = '';
 




  /** object of column keys with filter values selected */
  /** should be integrated with filterCount - work in progress */
  @property({ type: Object })
  queryState: QueryState;

 





  uses
  1. columns to show in the grid 

UI interactions
toolbar
header/sorter
header/filters
===
status - opens on-click
- handleStatusChange
site - opens on-click
- handleSiteSelection
===
text - handleAddChip (on textChange/enter/search button)
chips - handleRemoveChip
clear X - removeColFilters
===
date - handleDateChange (on change)
close/clear - close/clearDatePicker 

==== things to reset
countFilterList - update filter numbers




renderHeaders 
- requires the name of the column: 'Site" (id)
- refreshes the sortHeader (number bubble change) & context menu (chips);


rule - is

franlin or wilson

and 
george

only george frnaklin or george wilson
=== currnt
john franklin
john chin
john smith

firstName = john // shows all 3
last name = franklin // show all franklins, when it should only show john franklin
so its not respecting the first name search any more
======
// list of coumns + Id
item array of
  ... { Id: string,
  Action: string,
  Status: string,
  Rule: string,
  'Message Type': string,
  'To Address': string,
  'Task Created': string,
  Site: string,
  'Study Date': string,
  'Patient Id': string,
  'Last Name': string,
  'First Name': string,} ...
  
  columnData.col.function = values
  ====

      const generic = new (function () {
      this.filterList = [];
      this.selected = false;
      this.filterCount = this.filterList.length;
    })();

cancel - accept 
fix retry - fail /complete only 
add data 
    ====
{ status:{...}, 
  site: {
    filterCount: 4
    filterList: ['a', 'b', 'c'], 
    selected: true (contextmenu last opened),
    deleteOne: this.filterList = []
  }, 
  studydate: {
 
  } 
}

 // list of columns
    this.queryState = {
      Action: [],
      Status: '',
      Rule: [],
      'Message Type': '',
      'To Address': '',
      'Task Created': [],
      Site: [],
      'Study Date': [],
      'Last Name': [],
      'First Name': [],
    };

columnData
 




Hey David, 

I'm leaving a pretty cool frontend position and am looking for a possible replacement. 

It's fully permanently remote, you'd be the main front-end person alongside the senior front end guy (who's the architect and a really sweet guy), using reactive components (the library is called 'lit') and redux.  its a small friendly team and the pay is good.  

messenger tasks

const initialOrder = ['Task Created', 'Status', 'Site', 'Study Date', 'Patient ID', 'Last Name', 'First Name', 'Rule', 'Action', 'Type', 'To Address'];

		'Id': 2162656,
		'Action': 'action2',
		'Date': null,
		'Description': 'description2',
		'ErrorNumber': null,
		'IpAddress': null,
		'StudyId': '4000001',
		'ModId': 'ecg',
		'PatientIdentifier': 'DI00658597',
		'PatientName': 'SLATES',
		'Result': null,
		'StudyPerformedOn': '2006-12-14',
		'StudySiteCode': 'Ace-7',
		'Time': null,
		'CreatedAt': '2006-12-14T10:18:31-05:00',
		'Username': null,
		'DescriptionT': null,
		'Changes': null


updated - page
- pageSetup > statusSetup / siteSetup
- getAllGridItems > 
    create itemArray
    create columnData, columns, reset 

updated - grid 
- if site - sortheaderrerender










vaadin grid sorter
        style=${(col.id !== 'Site') ? 'position: relative; top: 6px;' : ''}

        style='position: relative; bottom: 6px;' vaadin grid sorter element
// vaadin-grid sorter
      :host([test]) div[part~="indicators"] {
        position:relative;
        bottom:5px;
      }
vaadin-grid / whitespace nowrap
    height:55px;
      line-height: 55px;



vaadin grid sorter element 
  ?test = ${(col.id !== 'Site')}
statusOptions


shallow copy
object.assign / spread

- nested objects are not protected


deep copy 

- nested objects are
- they are truly distinct

- JSON.parse
- copying all nested 
 