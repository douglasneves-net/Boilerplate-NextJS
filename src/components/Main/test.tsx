import { render, screen } from '@testing-library/react'

import Main from '.'

describe('<Main />', () => {
  it('should render the heading', () => {
    const { container } = render(<Main />)
    expect(
      screen.getByRole('heading', { name: /react avançado/i })
    ).toBeInTheDocument()
    //Cria um snapshot na primeira vez, depois compara, então se mudar o conteudo ele vai perceber a mudança e notificar.
    expect(container.firstChild).toMatchSnapshot()
  })
})
