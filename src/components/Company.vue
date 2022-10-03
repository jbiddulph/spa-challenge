<template>
  <div class="bg-gray-200 h-100 my-10">
    <div>{{ companyDetails.name }}</div>
    <div>{{ companyDetails.id }}</div>
    <div>{{ companyDetails.name }}</div>
    <div>{{ companyDetails.email }}</div>
    <div>{{ companyDetails.phone }}</div>
    <div>{{ companyDetails.address }}</div>
    <div>{{ companyDetails.town_city }}</div>
    <div>{{ companyDetails.region_county }}</div>
    <div>{{ companyDetails.country_code }}</div>
    <div>{{ companyDetails.post_code }}</div>
  </div>
</template>

<script>
export default {
  name: "CompanyDetails",
  props: {
    companyDetails: {},
  },
};
</script>
