import React, { useEffect, useState } from "react";
import { products } from "../../ProductsApi";
import Product from "./Product";

function Products() {
  const [subject, setSubject] = useState("");
  const [grade, setGrade] = useState("");
  const [series, setSeries] = useState("");

  const [filteredList, setFilteredList] = useState(products);

  const filterItems = () => {
    setFilteredList(products);

    console.log("orignalArray");
    console.log(filteredList);
    console.log("------------");

    if (subject !== "") {
      setFilteredList(
        filteredList.filter((product) => {
          return subject === product.subject.toLowerCase();
        })
      );
    }

    if (grade !== "") {
      setFilteredList(
        filteredList.filter((product) => {
          return grade === product.grade.toLowerCase();
        })
      );
    }

    if (series !== "") {
      setFilteredList(
        filteredList.filter((product) => {
          return series === product.series.toLowerCase();
        })
      );
    }

    console.log(filteredList);
    console.log("------------!");
  };

  // const filterSubject = () => {
  //   if (subject === "") {
  //     setFilteredList(products);
  //   } else {
  //     setFilteredList(
  //       products.filter((product) => {
  //         return product.subject.toLowerCase() === subject.toLowerCase();
  //       })
  //     );
  //   }
  //   filterGrade();
  //   filterSeries();
  // };

  // const filterGrade = () => {
  //   if (grade === "") {
  //     // setFilteredList(filteredList);
  //   } else {
  //     setFilteredList(
  //       filteredList.filter((product) => {
  //         return product.grade.toLowerCase() === grade;
  //       })
  //     );
  //   }
  // };

  // const filterSeries = () => {
  //   if (series === "") {
  //     // setFilteredList(filteredList);
  //   } else {
  //     setFilteredList(
  //       filteredList.filter((product) => {
  //         return product.series.toLowerCase() === series;
  //       })
  //     );
  //   }
  // };

  useEffect(() => {
    filterItems();
    //

    console.log(subject);
    console.log(grade);
    console.log(series);
    // console.log(filteredList);
    //
  }, [subject, series, grade]);

  return (
    <div className="productPage">
      <div className="productsSection">
        <div className="filterBox">
          <h4
            style={{
              color: "#0096DA",
              textDecoration: "underline",
              fontWeight: 800,
            }}
          >
            Filter
          </h4>
          <select
            className="selectBox"
            name="subject"
            id="subject"
            // defaultValue=""
            onChange={(e) => {
              setSubject(e.target.value);
            }}
          >
            <option value="">All Subjects</option>
            <option value="english">English</option>
            <option value="urdu">Urdu</option>
            <option value="mathametics">Mathametic</option>
          </select>
          <select
            className="selectBox"
            name="grade"
            id="grade"
            // defaultValue=""
            onChange={(e) => {
              setGrade(e.target.value);
            }}
          >
            <option value="">All Grades</option>
            <option value="pre nursery">Pre Nursery</option>
            <option value="nursery">Nursery</option>
            <option value="1">1</option>
          </select>
          <select
            className="selectBox"
            name="series"
            id="series"
            onChange={(e) => {
              setSeries(e.target.value);
            }}
          >
            <option value="">All Series</option>
            <option value="cornerstone">Cornerstone</option>
            <option value="green hills">Green Hills</option>
          </select>
        </div>
        <div className="products">
          {filteredList.map((product, index) => {
            return <Product item={product} key={index} />;
          })}
        </div>
      </div>
    </div>
  );
}

export default Products;
