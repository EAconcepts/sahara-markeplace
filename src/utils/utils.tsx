export function convertDate(dateStr: string) {
    const dateObj = new Date(dateStr);
    const day = dateObj.getUTCDate();
    const monthNames = ["Jan.", "Feb.", "Mar.", "Apr.", "May", "Jun.", "Jul.", "Aug.", "Sept.", "Oct.", "Nov.", "Dec."];
    const month = monthNames[dateObj.getUTCMonth()];
    const year = dateObj.getUTCFullYear();

    // Determine ordinal suffix for the day
    let suffix;
    if (day % 10 === 1 && day !== 11) {
        suffix = "st";
    } else if (day % 10 === 2 && day !== 12) {
        suffix = "nd";
    } else if (day % 10 === 3 && day !== 13) {
        suffix = "rd";
    } else {
        suffix = "th";
    }

    // Format the date as '13th Sept. 2024'
    return `${day}${suffix} ${month} ${year}`;
}

// Example usage
// const dateStr = "2024-09-13T00:00:46.000000Z";
// console.log(convertDate(dateStr));  // Output: '13th Sept. 2024'
