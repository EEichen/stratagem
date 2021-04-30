# Stratagem

Link to [Stratagem](https://stratagem.herokuapp.com)

Link to [documentation](https://github.com/EEichen/stratagem/wiki)

Stratagem, inspired by Evernote, is a note taking app focused on noting down strategies
 to solve problems.

## Tech Used
---
    * React
    * Redux
    * Sequelize
    * Express
    * Node
    * CSS
    * JWT
    * Bcryptjs

## Features
---
    * Manuals - Users are able to create, edit, and delete manuals to store their       stratagems.

    * Stratagems - Users are able to create, edit, and delete stratagems to note down their ideas for solving problems and display associated images.

    * Autosave - Stratagems, upon being edited, are automatically saved after a period of time.


    * Search - Users can search for both manuals and stratagems and have the results displayed in a search result area.

    * User Auth - Users can sign up, log in, and log out.

### Autosave code Snippet
```js
    useEffect(() => {
        setSaved(false);

        let timeout;
        if(!initalLoad){
            timeout = setTimeout(() => {
                dispatch(editStratagem({ id, title, text, imageUrl }))
                setSaved(true)   
            }, 800);
        }
        return () => clearTimeout(timeout);
    }, [title, text, imageUrl, dispatch, id, history, stratagem.id, initalLoad])
```

### User homepage example
![Homepage](https://github.com/EEichen/stratagem/blob/main/images/Stratagem.png?raw=true)

## Future Plans
---
* Stratagems will support rich text editing.
* Users will be able to draw on a canvas and save the image to their stratagem.
* Users will be able to mark specific stratagems as their favorite.
* Users will be able to add friends and share manuals/stratagems.



