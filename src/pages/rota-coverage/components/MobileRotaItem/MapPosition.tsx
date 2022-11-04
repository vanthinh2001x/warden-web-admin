import React, { SVGProps } from 'react';

type Props = {} & SVGProps<SVGSVGElement>;

export default function MapPosition(props: Props) {
    return (
        <svg {...props} width="26" height="29" viewBox="0 0 26 29" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M0.520996 13.0552C0.520996 13.0412 0.520996 13.0254 0.520996 13.0113C0.520996 6.23298 6.02546 0.728516 12.8038 0.728516C19.5822 0.728516 25.0866 6.23298 25.0866 13.0113C25.0866 13.0254 25.0866 13.0412 25.0866 13.0552C25.0586 22.234 16.2255 27.7121 13.4338 28.6877C13.2478 28.7527 13.0249 28.8035 12.8038 28.8035C12.5827 28.8035 12.3704 28.7614 12.1739 28.6877C9.38218 27.7121 0.549071 22.234 0.520996 13.0552ZM12.8038 7.74727C15.7096 7.74727 18.0679 10.1056 18.0679 13.0113C18.0679 15.9171 15.7096 18.2754 12.8038 18.2754C9.89805 18.2754 7.53975 15.9171 7.53975 13.0113C7.53975 10.1056 9.89805 7.74727 12.8038 7.74727Z"
                fill="#E01B00"
            />
        </svg>
    );
}
