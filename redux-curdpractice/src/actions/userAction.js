export const getUsers = (data) => ({
    type:"GETUSER",
    payload:data,
});

export const deleteUser = (data) => ({
    type:"DELETE",
    payload:data,
});

export const editUser = (data) => ({
    type:"UPDATE",
    payload:data,
})