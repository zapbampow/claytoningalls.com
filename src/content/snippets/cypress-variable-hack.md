---
title: "How to treat info in Cypress like a variable"
publishedAt: 2025-05-16
updatedAt: 2025-05-16
tags: ["snippet", "cypress", "testing"]
status: "published"
---
# How to treat info in Cypress like a variable

[Cypress methods yield results instead of returning them](https://docs.cypress.io/app/core-concepts/introduction-to-cypress#:~:text=Cypress%20commands%20do%20not%20return%20their%20subjects%2C%20they%20yield%20them). But you sometimes (all the time) need to save information for later use. Normally that is just called a variable in javascript. Since Cypress methods don't return anything, then you have to follow a different pattern. It is a little verbose, but it works.

## The Basic Pattern: Wrap, Alias, Get, Yield
```js
// wrap the info and give it an alias
cy.wrap(someInfo).as('someInfo')

// get the alias and yield the info
cy.get('@someInfo').then(theInfo => {
    // use the yielded info
    cy.request('POST', `/api/deleteInfo/${theInfo}`)
})
```

This is basically the equivalent of 
```js
const someInfo = await getSomeInfo();

//OR

const someInfo = someObject.someInfo;
```

## An example using info from an http response
```js
cy.intercept('/myEndpoint').as('getMyEndpoint')
cy.wait('@getMyEndpoint').then(res => {
    const myID = res.body.ID
    // this alias will now be available for use somewhere else
    cy.wrap(myID).as('myID')
})

// sometime later in the test
cy.get('@myID').then(myID => {
    // use myID in some way
    cy.get(`[data-test="item-in-list-${myID}"]`)
        .should('be.visible')
})
```

