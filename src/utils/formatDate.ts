export const formatDate = (dateStr: string | Date) => {
    const date = new Date(dateStr)
    return date.toLocaleString()
}
