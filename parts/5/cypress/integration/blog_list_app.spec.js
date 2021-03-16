const user = {
    name: 'Barry Bairstow',
    username: 'barry',
    password: 'lol'
}

const blog = {
    title: 'Test Blog',
    author: 'Steve Austin',
    url: 'http://lol.com'
}

describe('Blog app', function() {
    beforeEach(function() {
        cy.request('POST', 'http://localhost:3003/api/testing/reset')
        cy.request('POST', 'http://localhost:3003/api/users', user)
        cy.visit('http://localhost:3000')
    })

    it('Login form is shown', function() {
        cy.contains('Log in to application')
        cy.contains('Username')
        cy.contains('Password')
        cy.contains('Submit')
    })

    describe('login', function() {
        it('Login is sucessful with correct credentials', function() {
            cy.get('#username').type(user.username)
            cy.get('#password').type(user.password)
            cy.contains('Submit').click()

            cy.contains('blogs')
            cy.contains('Barry Bairstow')
            cy.contains('Logout')

            cy.contains('create new')
            cy.contains('New Blog')
        })

        it('Login is unsucessful with incorrect credentials', function() {
            cy.get('#username').type('Steve')
            cy.get('#password').type('Austin')
            cy.contains('Submit').click()

            cy.contains('Log in to application')
            cy.contains('Username')
            cy.contains('Password')
            cy.contains('Submit')

            cy.contains('Error with login')
        })
    });

    describe('when logged in', function() {
        beforeEach(function() {
            cy.login({username: user.username, password: user.password})
        })

        it('A blog can be created', function() {
            cy.contains('New Blog').click()

            cy.get('#title').type(blog.title)
            cy.get('#author').type(blog.author)
            cy.get('#url').type(blog.url)

            cy.contains('Create').click()

            cy.contains('Blog created')
        })

        describe('when a note exists', function() {
          beforeEach(function() {
              cy.createNote({
                  title: blog.title,
                  author: blog.author,
                  url: blog.url
              })
          })

          it('A blog can be liked', function() {
              cy.contains(`${blog.title} by ${blog.author}`)
              cy.contains('View').click()

              cy.contains(blog.url)
              cy.get('.blogLikes').contains('0')

              cy.get('.blogLikes').contains('Like').click()
              cy.get('.blogLikes').contains('1')

              cy.contains('Likes added')
          })

          it('A blog can be deleted', function() {
              cy.contains(`${blog.title} by ${blog.author}`)
              cy.contains('View').click()

              cy.contains(blog.url)

              cy.get('.blogLikes').contains('Like').click()
              cy.get('.blogLikes').contains('1')

              cy.contains('Remove').click()

              cy.contains('Blog deleted')
          })
        })


    })
})

