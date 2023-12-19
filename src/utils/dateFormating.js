function formatDate(unformatDate) {
  const formatedDate = new Date(unformatDate);
  const options = {
    weekday: 'long',
    year: 'numeric',
    month: 'long',
    day: 'numeric'
  }

  return formatedDate.toLocaleString('es-ES', options);
}

export {
  formatDate
} 