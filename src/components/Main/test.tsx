import { render, screen } from '@testing-library/react';
import Main from './index';

describe('<Main/>', () => {

  it('Should render the heading', () => {

    const { container } =  render(<Main/>);

    expect(screen.getByRole('heading', { name: /React Avançado/i })).toBeInTheDocument()

    expect(container.firstChild).toMatchSnapshot();

  })

})
