const user = {
    name: 'Barry Bairstow',
    username: 'barry',
    password: 'lol'
}

const blogData = [
    {
        title: 'Test Blog',
        author: 'Steve Austin',
        url: 'http://lol.com',
        likes: 3
    },
    {
        title: 'Test Blog 2',
        author: 'Kurt Angle',
        url: 'http://lol.com',
        likes: 2
    },
    {
        title: 'Test Blog 3',
        author: 'Juan Cena',
        url: 'http://lol.com',
        likes: 2
    }

]

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

/*    describe('login', function() {
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
    });*/

    describe('when logged in', function() {
        beforeEach(function() {
            cy.login({username: user.username, password: user.password})
        })

/*        it('A blog can be created', function() {
            cy.contains('New Blog').click()

            cy.get('#title').type(blog[0].title)
            cy.get('#author').type(blog[0].author)
            cy.get('#url').type(blog[0].url)

            cy.contains('Create').click()

            cy.contains('Blog created')
        })

        describe('when a blog exists', function() {
          beforeEach(function() {
              cy.createBlog({
                  title: blog[0].title,
                  author: blog[0].author,
                  url: blog[0].url,
                  likes: blog[0].likes
              })
          })

          it('A blog can be liked', function() {
              cy.contains(`${blog[0].title} by ${blog[0].author}`)
              cy.contains('View').click()

              cy.contains(blog[0].url)
              cy.get('.blogLikes').contains('3')

              cy.get('.blogLikes').contains('Like').click()
              cy.get('.blogLikes').contains('4')

              cy.contains('Likes added')
          })

          it('A blog can be deleted', function() {
              cy.contains(`${blog[0].title} by ${blog[0].author}`)
              cy.contains('View').click()

              cy.contains(blog[0].url)

              cy.get('.blogLikes').contains('Like').click()
              cy.get('.blogLikes').contains('4')

              cy.contains('Remove').click()

              cy.contains('Blog deleted')
          })
        })*/
        describe('when multiple blogs exists', function() {
            beforeEach(function() {
                cy.createBlog({
                    title: blogData[0].title,
                    author: blogData[0].author,
                    url: blogData[0].url,
                    likes: blogData[0].likes
                })
                cy.createBlog({
                    title: blogData[1].title,
                    author: blogData[1].author,
                    url: blogData[1].url,
                    likes: blogData[1].likes
                })
                cy.createBlog({
                    title: blogData[2].title,
                    author: blogData[2].author,
                    url: blogData[2].url,
                    likes: blogData[2].likes
                })
            })
            it('The blogs are sorted by amount of likes', function() {

                const sortedBlogs =
                    blogData
                    .map((blog) => {
                        if(blog.title !== "Test Blog 2") {
                            blog.likes = blog.likes + 1
                        }
                        return blog;
                    })
                    .sort((a, b) => b.likes - a.likes)

                cy.contains(`${blogData[0].title} by ${blogData[0].author}`).as('firstBlogElement')
                cy.contains(`${blogData[1].title} by ${blogData[1].author}`).as('secondBlogElement')
                cy.contains(`${blogData[2].title} by ${blogData[2].author}`).as('thirdBlogElement')

                cy.get('@firstBlogElement').contains('View').click()
                cy.get('@firstBlogElement').contains('Like').click()
                cy.get('@firstBlogElement').get('.blogLikes').contains('4')

                cy.get('@thirdBlogElement').contains('View').click()
                cy.get('@thirdBlogElement').contains('Like').click()
                cy.get('@firstBlogElement').get('.blogLikes').contains('3')

                cy.get('.blogItem')
                    .each(($el, index, $list) => {
                        cy.wrap($el).contains(`${sortedBlogs[index].title} by ${sortedBlogs[index].author}`)
                    })

            })
        })
    })
})

