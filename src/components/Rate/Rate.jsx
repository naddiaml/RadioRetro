import { useState } from "react";
import "./Rate.css";

const Rate = ({ rating, maxRating }) => {
    return (
        <div>
            <div>
                {[...Array(maxRating)].map((_, index) => (
                    <span
                        key={index}
                        className={index + 1 <= rating ? "star filled" : "star"}
                    >
                        ★
                    </span>
                ))}
            </div>
        </div>
    );
};

export default Rate;