export const datestringTodate = (datestring: string): Date => {

    const datecollection = datestring.split("/").map((el: string): number => parseInt(el) )
    const date = new Date(datecollection[2], datecollection[1] - 1, datecollection[0])

    return date

}