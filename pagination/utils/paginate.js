const paginate = (followers) => {
    const numPerPage = 10;
    const numOfPages = Math.ceil(followers.length / numPerPage);

    const paginated = Array.from({length: numOfPages}, (_, index) => {
        const start = index * numPerPage;
        return followers.slice(start, start + numPerPage);
    })

    return paginated
}

export default paginate;