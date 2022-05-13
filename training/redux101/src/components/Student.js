import React from 'react'
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';

function Student(props) {
    const styles = {textDecoration: 'none', color: '#fff'};
    const MyList = props.students.map((s) => {
        return (
            <div key={s.id}>
                <Link style={styles} to={`/studentDetails/${s.id}`}>{s.name}</Link>
            </div>
        )
    })
  return (
    <div>
        {MyList}
    </div>
  )
}

const mapStateToProps = (state) => {
    return { students: state.students }
}

export default connect(mapStateToProps)(Student);