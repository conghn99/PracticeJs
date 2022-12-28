import React from 'react'
import { useState } from 'react'
import { useEffect } from 'react';

function BillInformation({data}) {
    const [subtotal, setSubTotal] = useState(() => {
        return data.reduce((acc, curr) =>
            acc + (curr.price*curr.count), 0)
    })
    useEffect(() => setSubTotal(data.reduce((acc, curr) => acc + (curr.price*curr.count), 0)), [data])
    return (
        <div className="col-md-4">
            <div className="bill">
                <div className="border mb-2 p-3 fs-5 fw-normal d-flex justify-content-between align-items-center">
                    <span className="text-black-50">Tạm tính:</span>
                    <span className="text-primary" id="sub-total-money">{subtotal + " VND"}</span>
                </div>
                <div className="border mb-2 p-3 fs-5 fw-normal d-flex justify-content-between align-items-center">
                    <span className="text-black-50">VAT (10%):</span>
                    <span className="text-primary" id="vat-money">{subtotal*0.1 + " VND"}</span>
                </div>
                <div className="border mb-2 p-3 fs-5 fw-normal d-flex justify-content-between align-items-center">
                    <span className="text-black-50">Thành tiền:</span>
                    <span className="text-primary" id="total-money">{Math.round(subtotal*1.1) + " VND"}</span>
                </div>
            </div>
        </div>
    )
}

export default BillInformation