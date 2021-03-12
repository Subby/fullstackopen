import React from 'react'
import '@testing-library/jest-dom/extend-expect'
import { render, fireEvent } from '@testing-library/react'
import BlogForm from './BlogForm'

describe('<BlogForm>', () => {

    let mockFunction
    let component

    beforeEach(() => {
        mockFunction = jest.fn()
        component = render(
            <BlogForm handleCreateBlog={mockFunction}/>
        )
    })

    test('component is rendered', () => {
        expect(component.container.querySelector('form'))
            .toBeTruthy();

    })

    test('when a new blog is submitted it sends the proper prop values to the event handler', () => {

        const titleField = component.container.querySelector('#title')
        const authorField = component.container.querySelector('#author')
        const urlField = component.container.querySelector('#url')
        const submitButton = component.getByText('Create')

        fireEvent.change(titleField, {
            target: { value: 'Sick title' }
        })
        fireEvent.change(authorField, {
            target: { value: 'Stevie' }
        })
        fireEvent.change(urlField, {
            target: { value: 'http://isawesum.net' }
        })
        fireEvent.click(submitButton)

        expect(mockFunction.mock.calls).toHaveLength(1)
        expect(mockFunction.mock.calls[0][0]).toBe('Sick title')
        expect(mockFunction.mock.calls[0][1]).toBe('Stevie')
        expect(mockFunction.mock.calls[0][2]).toBe('http://isawesum.net')

    })

})