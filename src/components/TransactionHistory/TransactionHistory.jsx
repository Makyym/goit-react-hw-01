import s from './TransactionHistory.module.css'

const TransactionHistory = ({ items }) => {
    return (
        <table className={s.spreadsheet}>
            <thead>
                <tr>
                    <th>Type</th>
                    <th>Amount</th>
                    <th>Currency</th>
                </tr>
            </thead>
            <tbody>
                {items.map(item => {
                    const {id, type, amount, currency} = item;
                    return (
                        <tr key={id}>
                            <td className={s.name}>{type}</td>
                            <td>{amount}</td>
                            <td>{currency}</td>
                        </tr>
                    )
                })}
            </tbody>
        </table>
    )
}

export default TransactionHistory