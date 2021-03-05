import React from 'react'
import '@testing-library/jest-dom/extend-expect'
import { render } from '@testing-library/react'
import Blog from './Blog'

describe('<Blog>', () => {

    const blog = {
        title: 'Test Tile',
        likes: 34,
        author: 'Barry Stanilo',
        url: 'http://lol.com'
    }

    const emptyFunc = () => {}


    let component

    beforeEach(() => {
        component = render(
            <Blog blog={blog} handleBlogLike={emptyFunc} handleBlogRemove={emptyFunc}/>
        )
    })

    test('component is rendered', () => {
        expect(component.container.querySelector('.blogItem'))
            .toBeDefined();
    })

    test('at the start only author and title are displayed', () => {
        expect(component.container)
        expect(component.container)
            .toHaveTextContent(blog.author)
        expect(component.container.querySelector('.blogUrl')).toHaveStyle('display:"none" ')

    })

})