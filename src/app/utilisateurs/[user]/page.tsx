function User({ params }: { params: { user: string }}) {
    console.log(arguments);

    return <div>{params.user}</div>
};

export default User;
