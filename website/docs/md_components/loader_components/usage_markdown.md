Loaders can be used to indicate progress on long actions/waits which meet some or preferably all of these characteristics: 

- the action/wait is blocking user flow. That is, it's difficult or impossible for the user to proceed with the flow she is on without waiting. 
    - e.g. The user asked a question and the answer is being retrieved from a server 

    - e.g. The user scrolled to the bottom of page feed and new content is being loaded

- the action is long enough that a user may feel anxious if there is no indication of progress. For short actions or waits having a short-lived throbber is not a great idea because it can confuse users 

- it's difficult or impossible to indicate exact progress. If it's possible to indicate progress (eg percentage complete) then progress bars or widgets are more appropriately communicative and less likely to frustrate users

### Dont ‘s 
Do not use it for actions that take less than 1 sec. 