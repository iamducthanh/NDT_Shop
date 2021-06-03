const aoKhoacService = {
    nextPage(data, maxPage, setAoKhoac, page, setPage) {
        if (page + 1 > maxPage) {
        } else {
            setAoKhoac(data)
        }
        if (page >= maxPage - 1) {
            setPage(maxPage)
        } else {
            setPage(page + 1)
        }
    }
}
export default aoKhoacService;