export interface CategoriesSection {
  id: string;
  title: string;
  itemCount: number;
  image: string;
}

export const categoriesData: CategoriesSection[] = [
  {
    id: "1",
    title: "Men's Fashion",
    itemCount: 1200,
    image:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuBcdRsE7C0nb73st_P7rtC5hzNbVt1w8-x2t1Sbl9-BrlO6dE2vhXLZ1jUehEMNrXzYtOFdVd-NAabpax5eJmrG85oUbRdgYggjXz8zZ6gXhrfZgOyABU8x-Pq9ne7wxH1bL0J2i5v_MsiaC7Yet2lLXLCq8DSdFZNQhD2xygWHFJo9eqw6rDENJyBvK1Wk2Aa8x-pw2lTRM_zqBavWNyzxfoUUWZ41-xsXDqRTxS7DyvHlxTVWBfLACVUVZ8zo6f5vW3-RfBzBSTA",
  },
  {
    id: "2",
    title: "Women's Fashion",
    itemCount: 1500,
    image:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuDwBjEXyX_4zPYnbGrdiu75TFncFKJC34xFK8XTtykEV6rA4ht3_4D9ADZFwGAMsZRzARYmQUX12_zfK5LxuhVLux1SCaJM325WPTqXadSiU3LazpKYDrs7UKHnho1CqwiVG7aeowyyqQyK76c1wKwg7UxutHIcnU3lczCeSRyHi5Wmkwfy6IRozRfWGY6dwk8-YVhDmYbhRuc2RfpybOan86wcUvisTKQV-KACJnIV4cUwJgrehQPBBdksAhXHqBf1_2y8WVpQ22E",
  },
  {
    id: "3",
    title: "Electronics",
    itemCount: 850,
    image:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuC-s7HHUrdJaKN0uTfDH0t4iYynGsd3573aZRUG0Z4jlCk_qBoK2GlIDCaiZVA38CjChWWEeqfIAu6AAPMHYe5ax6kVzT1Ys3fkXkx9Oc0Mw88KJDi9NdSYtCyDL0uOuAikS6lsPmBHqSCgCXA6lQ3JB5Io0u6idkeU0CbO7OpSar-g3mrzP-6R9gtHVtZB41hysZ4Ezl-fLSuSVOByjHS10oTqPtZWvgFLLJf31zJ8_HB8mehcXX-cQn_CDZUqEnjqkwjMOjBGdeI",
  },
  {
    id: "4",
    title: "Home & Garden",
    itemCount: 2100,
    image:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuCp6KS_o5SBgjvWQ8Hyq-wYdVFBkP25xUqTT_NLkxNFgVa0UO1r4eh4MbFNLN8A_nSjjAMLuP0JDSqUoOpuIhkhDk0EWzyZ_FWp7cN4zzSCOEdLqRRCeWUGpwOj4HPZExFE7m9jYF6rlrRRdxlr1XQWGr73q-7WaMuboIS5Rq9sT1tVFtkffhVmVxqmkgDORq7w6TsmxuJvEi0qhTBzJJdLkAvR3RmtlxCebZP39gPZgv5bbC61m9syfeDiKy6idE7A1P_Tw1c14BU",
  },
  {
    id: "5",
    title: "Sports & Outdoors",
    itemCount: 950,
    image:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuCXyzsFCBWyF3McMMm54iRe59n7dn_jrquN_kfiE37IlNwQ7Yd5q4VN2nr6qv1fUNaWXS_NmVWRp-Uis_E_k0lypawvz-dId6L6uJ9hHZxnKYE-Rva5zlPTbbSnBCjIu0d3ET0Y3FjtAUC87QRQQ6Om7JuQZr_5V2ugubrpjJsVSyIeOHdl20BEO3uc82jf8HWE2dPdlmw5OUXUAbrdb1MIM8D6R2Uewr4p6DqTsk5XNvRQwbAjiwL8s7grHVHhpzWw-vV1Kzxh8a0",
  },
  {
    id: "6",
    title: "Beauty & Health",
    itemCount: 780,
    image:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuA9adcDNdrKKfeoHnZ59WhqzWsL-wWoV7A_6CyBdcJMf7ewCOiYS_1xgH7Au613bQ-W7EGZEdjySVqaOL9-7OMNUiCFEpUirCwSWvN29yQFgPcMf2jfKafntej7sO4XRVB2ZqciEdT86ODb0sMOA8sfUu03B1BHJxNTtbyy_ssTqc04uHklLoPAKlY50zeZWoBKhpGHqyeE67nSYA3XlhHbvPcEBbebo2vqQOmPuuh3Czk9nDuJdaQpNpHDECUG7Ix_BEyFFuwPiEI",
  },
  {
    id: "7",
    title: "Toys & Games",
    itemCount: 600,
    image:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuDACwhBNK5j6UqWkyvkTnFw2-akk9SFNP-sc3rWSd2T3ofTrxwyx8oZ4Qa3nv2QkopP-imo8c13sgCyYPLHI33qtmocNMJUVeDF6QW7BNE_JAo_9Fssv1M4ffXneSmnv1n1ytUNZFWH2RBG6pyCKzKIZEYwdss4tuiyaK_e7wMipYPXCRisg3_ZQ7fiXMhM6f10czJ5BssZnbLhpXr1OOAUqkfQlJpAGqMHvEzlb08YlJO75ks099N2DXL-21YeG6jsdhgCpsjwlUg",
  },
  {
    id: "8",
    title: "Automotive",
    itemCount: 450,
    image:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuATK1bo_I_6bTTTTx1X5PuExrLRhG9DWHMdl-ssbUJHAKVvMhYm6KtxFStaLXSVu89HHWlXB4J8mMYDU2xKtkTyASkazKmBlWLSZSwnmkOisjGVwgODKOC9x_xDBFCUlkLDjkL6eBTvTiDCyOkPqKo3C8Sj-L7Dqp7JqPpxSqlcUwPt4ZfjsTcAfa1zCynnV6m6Ee2prZ2KNMOWSu9CwJzj2DpVimNDnzwIzhjoSNgzzmv_VPrPmKNlyChwjC6uqZpDi4NZPQlHcyI",
  },
];
