import similarity

sample = '/home/labib/Projects/similarity/document/text.txt'
# with open(sample) as r:
#     lines = r.readlines()
#     lines = list(filter(lambda l: l != '\n', lines))
    # for idx, (s1, s2) in enumerate(zip(lines[::2], lines[1::2]), 1):
    #     print(idx, round(similarity.calculate(s1, s2), 2))
s1 = "Proses belajar-mengajar di Oxford diperkirakan telah dimulai sejak tahun 1096, tetapi tanggal pastinya universitas ini didirikan tidak diketahui."
s2 = "Tanggal pendirian Universitas Oxford tidak diketahui. Proses belajar-mengajar di Oxford diperkirakan telah dimulai sejak tahun 1096, tetapi tanggal pastinya universitas ini didirikan tidak diketahui."
print(similarity.calculate_verbose(s1, s2))