export default function handleEnterKeyPress(event, callback) {
  if (event.key === 'Enter') {
    event.preventDefault();
    callback(event);
  }
}
