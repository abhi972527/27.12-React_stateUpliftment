export const TodoItem = ({ title, status, id, handleToggle }) => {
    console.log("Id from", title, "is", id);
    return (
        <>
            <div>
                {title} - {status ? "Done" : "Not Done"}
                <button onClick={() => handleToggle(id)}>Mark as done</button>
            </div>
        </>
    );
};