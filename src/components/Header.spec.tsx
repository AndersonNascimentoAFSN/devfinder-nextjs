import { RenderResult, render, screen } from '@testing-library/react'
import { Header } from '.'

type SutType = 'light' | 'dark'

type SutResponse = {
  sut: RenderResult
}

const makeSut = (state?: SutType): SutResponse => {
  const sut = render(<Header state={state} />)

  return { sut }
}

describe('<Header />', () => {
  describe('render', () => {
    it('should render correctly with title', () => {
      const { sut } = makeSut()
  
      const title = sut.getByRole('heading', { name: /devfinder/i })
      expect(title).toBeVisible()
      expect(title).toHaveClass('text-2md font-bold')
    })
  
    it('should render correctly with text dark when state is light', () => {
      const { sut } = makeSut('light')
  
      const dark = sut.getByText(/dark/i)
      expect(dark).toBeVisible()
    })
  
    it('should render correctly with text light when state is dark', () => {
      const { sut } = makeSut('dark')
  
      const dark = sut.getByText(/light/i)
      expect(dark).toBeVisible()
    })

    it('should render correctly with icon moon when state is light', () => {
      const { sut } = makeSut('light')
  
      const dark = sut.getByTestId('moon-icon')
      expect(dark).toBeVisible()
    })
    it('should render correctly with icon moon when state is dark', () => {
      const { sut } = makeSut('dark')
  
      const dark = sut.getByTestId('sun-icon')
      expect(dark).toBeVisible()
    })
  })

  describe('styles', () => {
    describe('title', () => {
      it('should render with classNames when state is light', () => {
        const { sut } = makeSut()
    
        const title = sut.getByRole('heading', { name: /devfinder/i })
        expect(title).toHaveClass('text-2md font-bold text-gray-900')
      })
      it('should render with classNames when state is dark', () => {
        const { sut } = makeSut('dark')
    
        const title = sut.getByRole('heading', { name: /devfinder/i })
        expect(title).toHaveClass('text-2md font-bold text-white')
      })
    })
    describe('icons and title icon', () => {
      it('should render icons with classNames when state is light', () => {
        const { sut } = makeSut('light')
        const light = sut.getByTestId('moon-icon')

        expect(light).toHaveClass('h-5 w-5 fill-cyan-500 stroke-cyan-500')
      })
      it('should render icons with classNames when state is dark', () => {
        const { sut } = makeSut('dark')
        const light = sut.getByTestId('sun-icon')

        expect(light).toHaveClass('h-5 w-5 fill-white stroke-white')
      })
      it('should render title icon with classNames when state is light', () => {
        const { sut } = makeSut('light')
        const lightTitle = sut.getByText(/dark/i)

        expect(lightTitle).toHaveClass('font-bold text-md text-cyan-500')
      })
      it('should render title icon with classNames when state is dark', () => {
        const { sut } = makeSut('dark')
        const darkTitle = sut.getByText(/light/i)

        expect(darkTitle).toHaveClass('font-bold text-md text-white')
      })
    })
  })
})