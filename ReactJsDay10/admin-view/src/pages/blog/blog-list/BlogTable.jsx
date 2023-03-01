import React from 'react'
import { Link } from 'react-router-dom';
import { useGetBlogsQuery } from '../../../app/services/blog.service'
import { formatDate } from '../../../utils/functionUtils';
import { useNavigate } from 'react-router-dom';

function BlogTable() {
    const { data, isLoading } = useGetBlogsQuery();
    const navigate = useNavigate()

    if (isLoading) {
        return <h2>Loading....</h2>
    }
    return (
        <div className="container-fluid">
            <div className="row py-2">
                <div className="col-12">
                    <button type="button" className="btn btn-primary" onClick={() => navigate("/admin/blogs/create")}>
                        <i className="fas fa-plus"></i> Viết bài
                    </button>
                    <button type="button" className="btn btn-info">
                        <i className="fas fa-redo"></i> Refresh
                    </button>
                </div>
            </div>
            <div className="row">
                <div className="col-12">
                    <div className="card">
                        <div className="card-body">
                            <table className="table table-bordered table-hover">
                                <thead>
                                    <tr>
                                        <th>Tiêu đề</th>
                                        <th>Tác giả</th>
                                        <th>Danh mục</th>
                                        <th>Trạng thái</th>
                                        <th>Ngày tạo</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {data.length > 0 && data.map((b, i) => (
                                        <tr key={i}>
                                            <td>
                                                <Link to={`/admin/blogs/${b.id}`}>{b.title}</Link>
                                            </td>
                                            <td>
                                                <Link to={`/admin/users/${b.user.id}`}>{b.user.name}</Link>
                                            </td>
                                            <td>
                                                {b.categories.map(c => c.name).join(", ")}
                                            </td>
                                            <td>
                                                {b.status ? "Cong khai" : "Nhap"}
                                            </td>
                                            <td>
                                                {formatDate(b.createdAt)}
                                            </td>
                                        </tr>
                                    ))}
                                </tbody>
                            </table>

                            <div className="d-flex justify-content-center mt-3" id="pagination">
                                <ReactPaginate
                                    nextLabel="next >"
                                    onPageChange={handlePageClick}
                                    pageRangeDisplayed={3}
                                    marginPagesDisplayed={2}
                                    pageCount={pageCount}
                                    previousLabel="< previous"
                                    pageClassName="page-item"
                                    pageLinkClassName="page-link"
                                    previousClassName="page-item"
                                    previousLinkClassName="page-link"
                                    nextClassName="page-item"
                                    nextLinkClassName="page-link"
                                    breakLabel="..."
                                    breakClassName="page-item"
                                    breakLinkClassName="page-link"
                                    containerClassName="pagination"
                                    activeClassName="active"
                                    renderOnZeroPageCount={null}
                                />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default BlogTable