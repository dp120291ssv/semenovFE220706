import React from 'react';

export type IProps = {
    bgColor: string;
    itemTitle: string;
    completed: number;
    isCustom: boolean;
    customCompleted?: number | null;
}

const ChartBar = ({bgColor, completed, isCustom, customCompleted, itemTitle}: IProps) => {

    const root = {
        display: 'flex',
        alignItems: 'center'
    }

    const title = {
        width: 100,
        marginRight: 50,
    }

    const containerStyles = {
        height: 20,
        width: '200px',
        backgroundColor: "#e0e0de",
        margin: 10
    }

    const fillerStyles = {
        height: '100%',
        width: isCustom ? `${customCompleted}%` : `${completed}%`,
        backgroundColor: bgColor,
        borderRadius: 'inherit',
    }

    const labelStyles = {
        padding: 5,
        color: 'white',
        fontWeight: 'bold'
    }

    return (
        <>
            <div style={root}>
                <div style={title}>{itemTitle}</div>
                <div style={containerStyles}>
                    <div style={fillerStyles}>
                        <span style={labelStyles}>{isCustom ? customCompleted : completed}</span>
                    </div>
                </div>
            </div>
        </>
    );
};

export default ChartBar;