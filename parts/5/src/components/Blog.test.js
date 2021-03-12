import React from 'react'
import '@testing-library/jest-dom/extend-expect'
import { render, fireEvent } from '@testing-library/react'
import Blog from './Blog'

describe('<Blog>', () => {

    const blog = {
        title: 'Test Tile',
        likes: 34,
        author: 'Barry Stanilo',
        url: 'http://lol.com'
    }

    let mockFunction
    let component

    beforeEach(() => {
        mockFunction = jest.fn()
        component = render(
            <Blog blog={blog} handleBlogLike={mockFunction} handleBlogRemove={mockFunction}/>
        )

    })

    test('component is rendered', () => {
        expect(component.container.querySelector('.blogItem'))
            .toBeTruthy();

    })

    test('at the start only author and title are displayed', () => {
        expect(component.container)
        expect(component.container)
            .toHaveTextContent(blog.author)
        expect(component.container.querySelector('.hiddenContent')).toHaveStyle('display: none')

    })

    test('when "view" is clicked, likes and url are shown', () => {
        const button = component.getByText('View')
        fireEvent.click(button)

        expect(component.container.querySelector('.hiddenContent')).toHaveStyle('display: block')

    })

    test('when "like" is clicked twice, the event handler is called twice', () => {
        const button = component.getByText('Like')
        fireEvent.click(button)
        fireEvent.click(button)

        expect(mockFunction.mock.calls).toHaveLength(2)

    })

})