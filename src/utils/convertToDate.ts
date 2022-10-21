export function convertToDate(date: Date){
  return (
    new Intl.DateTimeFormat('en-US').format(new Date(date))
  )
}