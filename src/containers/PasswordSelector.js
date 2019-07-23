import React from 'react';
import {Button} from "antd";

const passwords = [
    'mouse',
    'ox',
    'tiger',
    'rabbit',
    'dragon',
    'snake',
    'horse',
    'goat',
    'monkey',
    'rooster',
    'dog',
    'pig',
    'cat'
];

export default function PasswordSelector({ selectedPassword, updatePassword }) {
    const isSelected = (password) => password === selectedPassword;
    const handleUpdatePassword = (password) => () => updatePassword(password);

    return (
        <div className="d-inline-flex flex-wrap justify-content-center">
            {passwords.map(password => (
                <Button disabled={isSelected(password)}
                           onClick={handleUpdatePassword(password)}
                           key={password}
                        className="m-1"
                >
                    {password}
                </Button>
            ))}
        </div>
    );
}
