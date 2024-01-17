import React from 'react';

const LoadingSpinner = () => {
    return (
        <>
            <div className='w-full px-4 lg:w-5/12'>
                <div className='mb-8'>
                    <div
                        className='bg-stroke dark:bg-dark-3 relative h-2.5 w-full rounded-2xl'
                        style={{
                            overflow: 'hidden',
                            animation: 'loadingAnimation 1.5s infinite linear',
                        }}
                    >
                        <div
                            className='bg-primary absolute top-0 left-0 h-full rounded-2xl'
                            style={{ width: '100%' }}
                        ></div>
                    </div>
                </div>
            </div>
            <style>
                {`
          @keyframes loadingAnimation {
            0% {
              width: 0;
            }
            100% {
              width: 100%;
            }
          }
        `}
            </style>
        </>
    );
};

export default LoadingSpinner;
