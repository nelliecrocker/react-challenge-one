function Views() {
    return (
        <>
            <form>
                <label>Tell us about you!</label>
                <input onChange={(e) => { setCurrentStatus(e.target.value) }}></input>
            </form>
        </>
    )
}

export default Views