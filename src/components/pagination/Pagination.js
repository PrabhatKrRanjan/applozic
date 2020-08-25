import React from 'react';
import './Pagination.css';
import { connect } from 'react-redux';
import { changePage } from '../../redux/action';

const Paginatoin = ({ total, page, perPage, changePage }) => {

    const totalPage = Math.ceil(total / perPage);
    const pageList = []

    for (let i = page - 1; i >= 0 && i <= page + 1 && i <= totalPage; i++) {

        if (i === page - 1) {
            if (i !== 0) {
                pageList.push(<button key={i} className="page-btn" onClick={() => changePage(page - 1)}>⇚</button>);
            }
            continue;
        }
        if (i === page + 1) {
            pageList.push(<button key={i} className="page-btn" onClick={() => changePage(page + 1)}>⇛</button>);
            continue;
        }
        pageList.push(<button className="page-btn" key={i} onClick={() => changePage(i)}>{i}</button>)
    }

    return (
        <div>
            {pageList}
        </div>
    )
}

const mapStateToProps = (state) => ({
    total: state.total,
    page: state.page,
    perPage: state.perPage
})

const mapDispatchToProps = dispatch => ({
    changePage: (payload) => dispatch(changePage(payload))
})

export default connect(mapStateToProps, mapDispatchToProps)(Paginatoin)