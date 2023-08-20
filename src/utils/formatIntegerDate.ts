import dayjs from 'dayjs';

export function formatIntegerDate(dateNumber: number | string): string {
  const dateString = dateNumber.toString();
  if (dateString.length !== 8) {
    throw new Error("Invalid date number format");
  }
  const formattedDate = `${dateString.substring(0, 4)}/${dateString.substring(4, 6)}/${dateString.substring(6)}`;
  return dayjs(formattedDate).format("YYYY/MM/DD");
}
