import { render, screen } from '@testing-library/react'; //componenti render edilecek tanımlar
import App from './App';

test('renders learn react link', () => { //render edildginde react linkini kontrol et
  render(<App />); //render et App Componentini
  const linkElement = screen.getByText(/learn react/i); //ekrandaki learn react texti varmı
  expect(linkElement).toBeInTheDocument(); //git bu texti dokümen içinde varmı kontrol et diyorum
});
