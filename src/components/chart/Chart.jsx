
import { LineChart, Line, CartesianGrid, XAxis, YAxis } from 'recharts';

function Chart() {

    const studentMarks = [
        { id: 1, student: "Student A", math: 85, bengali: 78, english: 92 },
        { id: 2, student: "Student B", math: 76, bengali: 82, english: 89 },
        { id: 3, student: "Student C", math: 92, bengali: 88, english: 94 },
        { id: 4, student: "Student D", math: 78, bengali: 85, english: 80 },
        { id: 5, student: "Student E", math: 89, bengali: 91, english: 87 }
    ];




    return (
        <div className='flex justify-center py-10'>

            <div>
                <LineChart width={800} height={400} data={studentMarks}>
                    <Line type="monotone" dataKey="math" stroke="#8884d8" />
                    <Line type="monotone" dataKey="bengali" stroke="red" />
                    <Line type="monotone" dataKey="english" stroke="#8884d8" />
                    <CartesianGrid stroke="blue" />
                    <XAxis dataKey="student" />
                    <YAxis />
                </LineChart>


            </div>

        </div>
    )
}

export default Chart;

