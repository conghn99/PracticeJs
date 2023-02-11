import React from 'react'
import { useDeleteCategoryMutation, useGetCategoriesQuery, useUpdateCategoryMutation } from '../../app/services/categories.service'

function CategoryList() {
    const {data, isLoading} = useGetCategoriesQuery();
    const [updateCategory] = useUpdateCategoryMutation();
    const [deleteCategory] = useDeleteCategoryMutation();

    if (isLoading) {
        return <h2>Loading....</h2>
    }
    
    const handleUpdateCategory = (id, name) => {
        const newTitle = window.prompt("Cập nhật tiêu đề", name);

        if(newTitle === null) {
            return;
        }

        if (newTitle.trim() === "") {
            alert("Tiêu đề không được để trống");
            return;
        }
        
        const data1 = {
            id,
            newTitle
        }

        console.log(data1)

        updateCategory(data1)
            .unwrap()
            .then(() => {
                alert("Cap nhat thanh cong")
            })
            .catch((err) => {
                alert(err)
            })
    }

    const handleDeleteCategory = (id) => {
        if (window.confirm("Ban co chac muon xoa khum?")) {
            deleteCategory(id)
                .unwrap()
                .then(() => {
                    alert("Xoa thanh cong")
                })
                .catch((err) => {
                    alert(err)
                })
        }
    }

    
  return (
    <>
        <div className="container-fluid">
            <div className="row py-2">
                <div className="col-12">
                    <button type="button" className="btn btn-primary">
                        <i className="fas fa-plus"></i> Thêm danh mục
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
                                        <th>Tên danh mục</th>
                                        <th></th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {data.length > 0 && data.map((b) => (
                                        <tr key={b.id}>
                                            <td>
                                                {b.name}
                                            </td>
                                            <td>
                                                <button className="btn btn-info" onClick={() => handleUpdateCategory(b.id, b.name)}>
                                                    Update
                                                </button>
                                                <button className="btn btn-danger" onClick={() => handleDeleteCategory(b.id)}>
                                                    Delete
                                                </button>
                                            </td>
                                        </tr>
                                    ))}
                                </tbody>
                            </table>

                            <div className="d-flex justify-content-center mt-3" id="pagination">
                                <ul className="pagination mb-0">
                                    <li className="paginate_button page-item previous disabled"
                                        id="example2_previous">
                                        <a href="#" aria-controls="example2" data-dt-idx="0" tabIndex="0"
                                            className="page-link">Previous</a>
                                    </li>
                                    <li className="paginate_button page-item active">
                                        <a href="#" aria-controls="example2" data-dt-idx="1" tabIndex="0"
                                            className="page-link">1</a>
                                    </li>
                                    <li className="paginate_button page-item">
                                        <a href="#" aria-controls="example2" data-dt-idx="2" tabIndex="0"
                                            className="page-link">2</a>
                                    </li>
                                    <li className="paginate_button page-item">
                                        <a href="#" aria-controls="example2" data-dt-idx="3" tabIndex="0"
                                            className="page-link">3</a>
                                    </li>
                                    <li className="paginate_button page-item">
                                        <a href="#" aria-controls="example2" data-dt-idx="4" tabIndex="0"
                                            className="page-link">4</a>
                                    </li>
                                    <li className="paginate_button page-item">
                                        <a href="#" aria-controls="example2" data-dt-idx="5" tabIndex="0"
                                            className="page-link">5</a>
                                    </li>
                                    <li className="paginate_button page-item">
                                        <a href="#" aria-controls="example2" data-dt-idx="6" tabIndex="0"
                                            className="page-link">6</a>
                                    </li>
                                    <li className="paginate_button page-item next" id="example2_next">
                                        <a href="#" aria-controls="example2" data-dt-idx="7" tabIndex="0"
                                            className="page-link">Next</a>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </>
  )
}

export default CategoryList