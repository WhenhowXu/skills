// 筛选匹配规则
const defaultFilterFunc = (getValue, keywords, d) => {
  return (getValue(d) || "").toLowerCase().includes(keywords.toLowerCase());
};
/**
 *
 * @param {*} dataSource
 * @param {*} keywords 搜索关键字
 * @param {*} getValue
 * @param {*} filterLeaf 是否筛选叶子节点
 * @returns 匹配条件的数据
 */
const filterListOrTree = (
  dataSource,
  { keywords, getValue = (d) => d.name, filterLeaf = true } = {}
) => {
  const filterFunc = (keywords, d) => defaultFilterFunc(getValue, keywords, d);
  return keywords
    ? dataSource.reduce((filtered, d) => {
        const isMatch = filterFunc(keywords, d);
        let isChildrenMatch;
        if (filterLeaf && d.children && d.children.every((c) => c.isLeaf)) {
          isChildrenMatch =
            isMatch || d.children.some((c) => filterFunc(keywords, c))
              ? d.children
              : void 0;
        } else {
          isChildrenMatch =
            d.children &&
            filterListOrTree(d.children, { keywords, getValue, filterLeaf });
        }
        if (isMatch || (isChildrenMatch && isChildrenMatch.length > 0)) {
          filtered.push({ ...d, children: isChildrenMatch });
        }
        return filtered;
      }, [])
    : dataSource;
};
