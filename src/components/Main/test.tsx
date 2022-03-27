import { render, screen } from '@testing-library/react';
import Main from './index';

describe('<Main/>', () => {

  it('Should render the heading', () => {
    render(<Main/>);
    expect(screen.getByRole('heading', { name: /React Avançado/i })).toBeInTheDocument()
  })

})
